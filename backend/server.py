#!/usr/bin/env python3
"""
GramSetu — Live Local REST API Server (Python standard library)
Runs on port 5000 and serves all /api/* endpoints with strict regional partitioning,
hierarchical locations, realistic complaint data, and JWT mock authentication.
Zero external dependencies required.
"""

import sys
import json
import re
import base64
import os
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from datetime import datetime

# Windows console encoding fix
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 5000

# In-Memory Database
DATA = {
    "users": [
        {
            "id": "usr-cit-001",
            "name": "Rajesh Kumar",
            "mobile": "9876543210",
            "email": "rajesh.kumar@example.com",
            "passwords": ["password123", "Citizen@123"],
            "role": "citizen",
            "state": {"id": "st-up", "name": "Uttar Pradesh"},
            "district": {"id": "dt-var", "name": "Varanasi"},
            "taluka": {"id": "tk-var", "name": "Varanasi Sadar"},
            "region": {"id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001", "pincode": "221001"},
            "ward": {"id": "wd-ram-02", "name": "Ward 2 (Purab Tola)", "wardNumber": 2},
            "isVerified": True
        },
        {
            "id": "usr-cit-002",
            "name": "Sunita Devi",
            "mobile": "9876543211",
            "email": "sunita.devi@example.com",
            "passwords": ["password123", "Citizen@123"],
            "role": "citizen",
            "state": {"id": "st-mh", "name": "Maharashtra"},
            "district": {"id": "dt-pun", "name": "Pune"},
            "taluka": {"id": "tk-hav", "name": "Haveli"},
            "region": {"id": "rg-khed", "name": "Khed Shivapur Gram Panchayat", "code": "GP-MH-PUN-004", "pincode": "412205"},
            "ward": {"id": "wd-khed-01", "name": "Ward 1 (Mandir Galli)", "wardNumber": 1},
            "isVerified": True
        },
        {
            "id": "usr-adm-001",
            "name": "Ramesh Verma",
            "mobile": "9999000001",
            "email": "admin.rampur@gramsetu.gov.in",
            "passwords": ["admin123", "Admin@123"],
            "role": "regional_admin",
            "designation": "Panchayat Development Officer (PDO)",
            "state": {"id": "st-up", "name": "Uttar Pradesh"},
            "district": {"id": "dt-var", "name": "Varanasi"},
            "taluka": {"id": "tk-var", "name": "Varanasi Sadar"},
            "region": {"id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001", "pincode": "221001"},
            "isVerified": True
        },
        {
            "id": "usr-adm-002",
            "name": "Anil Deshmukh",
            "mobile": "9999000002",
            "email": "admin.shivapur@gramsetu.gov.in",
            "passwords": ["admin123", "Admin@123"],
            "role": "regional_admin",
            "designation": "Block Development Officer (BDO)",
            "state": {"id": "st-mh", "name": "Maharashtra"},
            "district": {"id": "dt-pun", "name": "Pune"},
            "taluka": {"id": "tk-hav", "name": "Haveli"},
            "region": {"id": "rg-khed", "name": "Khed Shivapur Gram Panchayat", "code": "GP-MH-PUN-004", "pincode": "412205"},
            "isVerified": True
        }
    ],
    "complaints": [
        {
            "complaintId": "CMP-2026-000001",
            "citizen": "usr-cit-001",
            "citizenName": "Rajesh Kumar",
            "citizenMobile": "9876543210",
            "category": "Street Lights",
            "title": "Broken street light pole near Primary School",
            "description": "The main street light fixture outside the government primary school has been damaged due to high winds. Children and villagers face total darkness in the evening.",
            "location": "Near Primary School, Purab Tola",
            "imageUrl": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
            "state": {"id": "st-up", "name": "Uttar Pradesh"},
            "district": {"id": "dt-var", "name": "Varanasi"},
            "taluka": {"id": "tk-var", "name": "Varanasi Sadar"},
            "region": {"id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001"},
            "ward": {"id": "wd-ram-02", "name": "Ward 2 (Purab Tola)", "wardNumber": 2},
            "status": "In Progress",
            "assignedOfficer": "Shri Sunil Yadav (Lineman, Electricity Dept)",
            "adminRemark": "Replacement LED fixture and bracket issued. Repair work underway by lineman team.",
            "createdAt": "2026-09-24T10:15:00.000Z",
            "updatedAt": "2026-09-26T14:30:00.000Z",
            "statusHistory": [
                {
                    "status": "Submitted",
                    "changedBy": "Rajesh Kumar (Citizen)",
                    "remarks": "Grievance ticket created with photographic proof.",
                    "timestamp": "2026-09-24T10:15:00.000Z"
                },
                {
                    "status": "Under Review",
                    "changedBy": "Ramesh Verma (PDO)",
                    "remarks": "On-site verification completed by Gram Sevak. Indent raised for 45W LED fixture.",
                    "timestamp": "2026-09-25T11:00:00.000Z"
                },
                {
                    "status": "In Progress",
                    "changedBy": "Ramesh Verma (PDO)",
                    "remarks": "Replacement LED fixture and bracket issued. Repair work underway by lineman team.",
                    "timestamp": "2026-09-26T14:30:00.000Z"
                }
            ]
        },
        {
            "complaintId": "CMP-2026-000002",
            "citizen": "usr-cit-001",
            "citizenName": "Rajesh Kumar",
            "citizenMobile": "9876543210",
            "category": "Water Supply",
            "title": "Drinking water pipeline burst at Shivaji Chowk",
            "description": "High pressure water pipe ruptured early morning. Potable water is flooding the road and 40 households have zero water pressure.",
            "location": "Shivaji Chowk near Panchayat Bhawan",
            "imageUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80",
            "state": {"id": "st-up", "name": "Uttar Pradesh"},
            "district": {"id": "dt-var", "name": "Varanasi"},
            "taluka": {"id": "tk-var", "name": "Varanasi Sadar"},
            "region": {"id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001"},
            "ward": {"id": "wd-ram-01", "name": "Ward 1 (Uttar Tola)", "wardNumber": 1},
            "status": "Resolved",
            "assignedOfficer": "Shri R.K. Sharma (JE Jal Nigam)",
            "adminRemark": "Pipeline welded, new collar fitted and water supply restored to all households.",
            "createdAt": "2026-09-22T08:00:00.000Z",
            "updatedAt": "2026-09-23T16:00:00.000Z",
            "statusHistory": [
                {
                    "status": "Submitted",
                    "changedBy": "Rajesh Kumar (Citizen)",
                    "remarks": "Grievance ticket created.",
                    "timestamp": "2026-09-22T08:00:00.000Z"
                },
                {
                    "status": "Resolved",
                    "changedBy": "Ramesh Verma (PDO)",
                    "remarks": "Pipeline welded, new collar fitted and water supply restored to all households.",
                    "timestamp": "2026-09-23T16:00:00.000Z"
                }
            ]
        },
        {
            "complaintId": "CMP-2026-000003",
            "citizen": "usr-cit-001",
            "citizenName": "Rajesh Kumar",
            "citizenMobile": "9876543210",
            "category": "Drainage",
            "title": "Overflowing drainage canal near weekly market",
            "description": "Solid plastic waste has clogged the drainage culvert causing foul smelling stagnant water on the market footpath.",
            "location": "Weekly Haat Market Ground",
            "imageUrl": "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
            "state": {"id": "st-up", "name": "Uttar Pradesh"},
            "district": {"id": "dt-var", "name": "Varanasi"},
            "taluka": {"id": "tk-var", "name": "Varanasi Sadar"},
            "region": {"id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001"},
            "ward": {"id": "wd-ram-02", "name": "Ward 2 (Purab Tola)", "wardNumber": 2},
            "status": "Submitted",
            "assignedOfficer": "",
            "adminRemark": "",
            "createdAt": "2026-09-27T07:30:00.000Z",
            "updatedAt": "2026-09-27T07:30:00.000Z",
            "statusHistory": [
                {
                    "status": "Submitted",
                    "changedBy": "Rajesh Kumar (Citizen)",
                    "remarks": "Grievance ticket created.",
                    "timestamp": "2026-09-27T07:30:00.000Z"
                }
            ]
        },
        {
            "complaintId": "CMP-2026-000004",
            "citizen": "usr-cit-002",
            "citizenName": "Sunita Devi",
            "citizenMobile": "9876543211",
            "category": "Roads",
            "title": "Potholes on main village approach road",
            "description": "Monsoon rains created deep 2-foot craters along a 400m stretch. Two motorcyclists skidded yesterday.",
            "location": "Main Approach Road near Toll Naka",
            "imageUrl": "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
            "state": {"id": "st-mh", "name": "Maharashtra"},
            "district": {"id": "dt-pun", "name": "Pune"},
            "taluka": {"id": "tk-hav", "name": "Haveli"},
            "region": {"id": "rg-khed", "name": "Khed Shivapur Gram Panchayat", "code": "GP-MH-PUN-004"},
            "ward": {"id": "wd-khed-01", "name": "Ward 1 (Mandir Galli)", "wardNumber": 1},
            "status": "In Progress",
            "assignedOfficer": "PWD Road Maintenance Contractor",
            "adminRemark": "Crushed stone aggregate dispatched; hot-mix patch resurfacing in progress.",
            "createdAt": "2026-09-25T09:00:00.000Z",
            "updatedAt": "2026-09-26T17:00:00.000Z",
            "statusHistory": [
                {
                    "status": "Submitted",
                    "changedBy": "Sunita Devi (Citizen)",
                    "remarks": "Grievance ticket created.",
                    "timestamp": "2026-09-25T09:00:00.000Z"
                },
                {
                    "status": "In Progress",
                    "changedBy": "Anil Deshmukh (BDO)",
                    "remarks": "Crushed stone aggregate dispatched; hot-mix patch resurfacing in progress.",
                    "timestamp": "2026-09-26T17:00:00.000Z"
                }
            ]
        }
    ],
    "locations": {
        "states": [
            {"_id": "st-up", "name": "Uttar Pradesh", "code": "UP"},
            {"_id": "st-mh", "name": "Maharashtra", "code": "MH"}
        ],
        "districts": {
            "st-up": [{"_id": "dt-var", "name": "Varanasi", "state": "st-up"}],
            "st-mh": [{"_id": "dt-pun", "name": "Pune", "state": "st-mh"}]
        },
        "talukas": {
            "dt-var": [{"_id": "tk-var", "name": "Varanasi Sadar", "district": "dt-var"}],
            "dt-pun": [{"_id": "tk-hav", "name": "Haveli", "district": "dt-pun"}]
        },
        "regions": {
            "tk-var": [{"_id": "rg-ram", "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001", "pincode": "221001"}],
            "tk-hav": [{"_id": "rg-khed", "name": "Khed Shivapur Gram Panchayat", "code": "GP-MH-PUN-004", "pincode": "412205"}]
        },
        "wards": {
            "rg-ram": [
                {"_id": "wd-ram-01", "name": "Ward 1 (Uttar Tola)", "wardNumber": 1},
                {"_id": "wd-ram-02", "name": "Ward 2 (Purab Tola)", "wardNumber": 2},
                {"_id": "wd-ram-03", "name": "Ward 3 (Dakshin Basti)", "wardNumber": 3},
                {"_id": "wd-ram-04", "name": "Ward 4 (Paschim Purwa)", "wardNumber": 4}
            ],
            "rg-khed": [
                {"_id": "wd-khed-01", "name": "Ward 1 (Mandir Galli)", "wardNumber": 1},
                {"_id": "wd-khed-02", "name": "Ward 2 (Bazaar Peth)", "wardNumber": 2},
                {"_id": "wd-khed-03", "name": "Ward 3 (Shindewadi)", "wardNumber": 3}
            ]
        }
    }
}

SESSION_TOKENS = {}

def get_user_from_token(token):
    if not token:
        return None
    token = token.replace("Bearer ", "").strip()
    return SESSION_TOKENS.get(token)

class GramSetuAPIHandler(BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_cors_headers()
        self.end_headers()

    def send_json(self, status_code, data):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_cors_headers()
        self.end_headers()
        self.wfile.write(body)

    def parse_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        if content_length == 0:
            return {}
        raw = self.rfile.read(content_length)
        content_type = self.headers.get("Content-Type", "")
        if "application/json" in content_type:
            try:
                return json.loads(raw.decode("utf-8"))
            except Exception:
                return {}
        elif "multipart/form-data" in content_type:
            # Simple multipart parser for complaint submissions
            text = raw.decode("latin-1")
            boundary = content_type.split("boundary=")[-1]
            parts = text.split("--" + boundary)
            result = {}
            for part in parts:
                if 'name="' in part:
                    match = re.search(r'name="([^"]+)"', part)
                    if match:
                        name = match.group(1)
                        if 'filename="' in part:
                            # Attached photo file
                            result["image"] = "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80"
                        else:
                            val = part.split("\r\n\r\n", 1)[-1].rsplit("\r\n", 1)[0]
                            result[name] = val.strip()
            return result
        return {}

    def get_auth_user(self):
        auth_header = self.headers.get("Authorization", "")
        return get_user_from_token(auth_header)

    # Router
    def do_GET(self):
        url = urlparse(self.path)
        path = url.path.rstrip("/")
        query = parse_qs(url.query)

        # Health
        if path == "/api/health":
            return self.send_json(200, {
                "status": "UP",
                "timestamp": datetime.utcnow().isoformat(),
                "database": "connected (live python api)",
                "environment": "live-demo"
            })

        # Locations Hierarchy
        if path == "/api/locations/states":
            return self.send_json(200, {"success": True, "states": DATA["locations"]["states"]})

        if path.startswith("/api/locations/districts/"):
            state_id = path.split("/")[-1]
            districts = DATA["locations"]["districts"].get(state_id, [])
            return self.send_json(200, {"success": True, "districts": districts})

        if path.startswith("/api/locations/talukas/"):
            district_id = path.split("/")[-1]
            talukas = DATA["locations"]["talukas"].get(district_id, [])
            return self.send_json(200, {"success": True, "talukas": talukas})

        if path.startswith("/api/locations/regions/"):
            taluka_id = path.split("/")[-1]
            regions = DATA["locations"]["regions"].get(taluka_id, [])
            return self.send_json(200, {"success": True, "regions": regions})

        if path.startswith("/api/locations/wards/"):
            region_id = path.split("/")[-1]
            wards = DATA["locations"]["wards"].get(region_id, [])
            return self.send_json(200, {"success": True, "wards": wards})

        # Auth Profile
        if path == "/api/auth/me":
            user = self.get_auth_user()
            if not user:
                return self.send_json(401, {"success": False, "message": "Unauthorized"})
            return self.send_json(200, {"success": True, "user": user})

        # Citizen Profile
        if path == "/api/citizen/profile":
            user = self.get_auth_user()
            if not user:
                return self.send_json(401, {"success": False, "message": "Unauthorized"})
            return self.send_json(200, {"success": True, "user": user})

        # Citizen Dashboard
        if path == "/api/citizen/dashboard":
            user = self.get_auth_user()
            if not user:
                return self.send_json(401, {"success": False, "message": "Unauthorized"})
            user_complaints = [c for c in DATA["complaints"] if c["citizen"] == user["id"]]
            stats = {
                "total": len(user_complaints),
                "submitted": sum(1 for c in user_complaints if c["status"] == "Submitted"),
                "underReview": sum(1 for c in user_complaints if c["status"] == "Under Review"),
                "inProgress": sum(1 for c in user_complaints if c["status"] == "In Progress"),
                "resolved": sum(1 for c in user_complaints if c["status"] == "Resolved"),
                "rejected": sum(1 for c in user_complaints if c["status"] == "Rejected")
            }
            return self.send_json(200, {
                "success": True,
                "stats": stats,
                "recentComplaints": user_complaints[:5]
            })

        # Citizen Complaints List
        if path == "/api/complaints":
            user = self.get_auth_user()
            if not user:
                return self.send_json(401, {"success": False, "message": "Unauthorized"})
            user_complaints = [c for c in DATA["complaints"] if c["citizen"] == user["id"]]
            return self.send_json(200, {
                "success": True,
                "complaints": user_complaints,
                "total": len(user_complaints)
            })

        # Citizen Single Complaint
        if path.startswith("/api/complaints/"):
            cid = path.split("/")[-1]
            for c in DATA["complaints"]:
                if c["complaintId"] == cid:
                    return self.send_json(200, {"success": True, "complaint": c})
            return self.send_json(404, {"success": False, "message": "Complaint not found"})

        # Admin Dashboard
        if path == "/api/admin/dashboard":
            admin = self.get_auth_user()
            if not admin or admin.get("role") != "regional_admin":
                return self.send_json(403, {"success": False, "message": "Forbidden"})
            admin_region_id = admin["region"]["id"]
            # Strict Regional Partitioning
            reg_complaints = [c for c in DATA["complaints"] if c["region"]["id"] == admin_region_id]
            stats = {
                "total": len(reg_complaints),
                "submitted": sum(1 for c in reg_complaints if c["status"] == "Submitted"),
                "underReview": sum(1 for c in reg_complaints if c["status"] == "Under Review"),
                "inProgress": sum(1 for c in reg_complaints if c["status"] == "In Progress"),
                "resolved": sum(1 for c in reg_complaints if c["status"] == "Resolved"),
                "rejected": sum(1 for c in reg_complaints if c["status"] == "Rejected")
            }
            return self.send_json(200, {
                "success": True,
                "region": admin["region"],
                "stats": stats,
                "recentComplaints": reg_complaints[:10]
            })

        # Admin Complaints List
        if path == "/api/admin/complaints":
            admin = self.get_auth_user()
            if not admin or admin.get("role") != "regional_admin":
                return self.send_json(403, {"success": False, "message": "Forbidden"})
            admin_region_id = admin["region"]["id"]
            # Strict Regional Filter
            reg_complaints = [c for c in DATA["complaints"] if c["region"]["id"] == admin_region_id]
            
            # Apply filters if provided
            status_filter = query.get("status", [None])[0]
            if status_filter and status_filter != "ALL":
                reg_complaints = [c for c in reg_complaints if c["status"] == status_filter]
                
            cat_filter = query.get("category", [None])[0]
            if cat_filter and cat_filter != "ALL":
                reg_complaints = [c for c in reg_complaints if c["category"] == cat_filter]

            search_query = query.get("search", [None])[0]
            if search_query:
                sq = search_query.lower()
                reg_complaints = [c for c in reg_complaints if sq in c["complaintId"].lower() or sq in c["title"].lower() or sq in c["location"].lower() or sq in c["citizenName"].lower()]

            return self.send_json(200, {
                "success": True,
                "region": admin["region"],
                "complaints": reg_complaints,
                "pagination": {
                    "total": len(reg_complaints),
                    "page": 1,
                    "limit": 20,
                    "pages": 1
                }
            })

        # Admin Single Complaint with Regional Isolation Enforcement
        if path.startswith("/api/admin/complaints/"):
            admin = self.get_auth_user()
            if not admin or admin.get("role") != "regional_admin":
                return self.send_json(403, {"success": False, "message": "Forbidden"})
            cid = path.split("/")[-1]
            for c in DATA["complaints"]:
                if c["complaintId"] == cid:
                    # Regional Isolation Check
                    if c["region"]["id"] != admin["region"]["id"]:
                        return self.send_json(403, {
                            "success": False,
                            "message": f"Jurisdiction Violation: Complaint {cid} belongs to a different Gram Panchayat ({c['region']['name']}). Access denied."
                        })
                    return self.send_json(200, {"success": True, "complaint": c})
            return self.send_json(404, {"success": False, "message": "Complaint not found"})

        # Admin Profile
        if path == "/api/admin/profile":
            admin = self.get_auth_user()
            if not admin or admin.get("role") != "regional_admin":
                return self.send_json(403, {"success": False, "message": "Forbidden"})
            return self.send_json(200, {"success": True, "admin": admin})

        self.send_json(404, {"success": False, "message": "Not Found"})

    def do_POST(self):
        url = urlparse(self.path)
        path = url.path.rstrip("/")
        body = self.parse_body()

        # Login
        if path == "/api/auth/login":
            identifier = body.get("mobile") or body.get("email") or ""
            password = body.get("password", "")

            # Match user
            matched_user = None
            for u in DATA["users"]:
                if u["mobile"] == identifier or u["email"].lower() == identifier.lower():
                    # Check passwords
                    if password in u.get("passwords", []) or password == "password123" or password == "Citizen@123" or password == "admin123" or password == "Admin@123":
                        matched_user = u
                        break

            if not matched_user:
                return self.send_json(400, {
                    "success": False,
                    "message": "Invalid mobile/email or password. Please check your credentials."
                })

            # Create token
            token = f"token_{matched_user['id']}_{int(datetime.utcnow().timestamp())}"
            SESSION_TOKENS[token] = matched_user

            return self.send_json(200, {
                "success": True,
                "message": "Login successful",
                "token": token,
                "user": matched_user
            })

        # Register Citizen
        if path == "/api/auth/register":
            name = body.get("name")
            mobile = body.get("mobile")
            password = body.get("password")
            if not name or not mobile:
                return self.send_json(400, {"success": False, "message": "Name and mobile are required"})

            new_user = {
                "id": f"usr-cit-{len(DATA['users'])+1:03d}",
                "name": name,
                "mobile": mobile,
                "email": body.get("email", ""),
                "passwords": [password, "password123", "Citizen@123"],
                "role": "citizen",
                "state": {"id": body.get("state", "st-up"), "name": "Uttar Pradesh"},
                "district": {"id": body.get("district", "dt-var"), "name": "Varanasi"},
                "taluka": {"id": body.get("taluka", "tk-var"), "name": "Varanasi Sadar"},
                "region": {"id": body.get("region", "rg-ram"), "name": "Rampur Gram Panchayat", "code": "GP-UP-VAR-001"},
                "ward": {"id": body.get("ward", "wd-ram-01"), "name": "Ward 1", "wardNumber": 1},
                "isVerified": True
            }
            DATA["users"].append(new_user)
            token = f"token_{new_user['id']}_{int(datetime.utcnow().timestamp())}"
            SESSION_TOKENS[token] = new_user

            return self.send_json(201, {
                "success": True,
                "message": "Citizen registered successfully! OTP verified in demo mode.",
                "token": token,
                "user": new_user
            })

        # OTP Verification
        if path == "/api/auth/verify-otp":
            return self.send_json(200, {"success": True, "message": "OTP verified successfully!"})

        if path == "/api/auth/resend-otp":
            return self.send_json(200, {"success": True, "message": "Fresh OTP simulated: 123456"})

        if path == "/api/auth/logout":
            return self.send_json(200, {"success": True, "message": "Logged out successfully"})

        # Submit Complaint
        if path == "/api/complaints":
            user = self.get_auth_user()
            if not user:
                return self.send_json(401, {"success": False, "message": "Unauthorized"})

            title = body.get("title", "Civic Grievance")
            description = body.get("description", "Reported civic issue requiring urgent resolution.")
            category = body.get("category", "Other")
            location = body.get("location", "Village Main Road")
            image_url = body.get("image") or "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80"

            cid = f"CMP-2026-{len(DATA['complaints'])+1:06d}"
            now = datetime.utcnow().isoformat() + "Z"

            new_complaint = {
                "complaintId": cid,
                "citizen": user["id"],
                "citizenName": user["name"],
                "citizenMobile": user["mobile"],
                "category": category,
                "title": title,
                "description": description,
                "location": location,
                "imageUrl": image_url,
                "state": user.get("state", {"name": "Uttar Pradesh"}),
                "district": user.get("district", {"name": "Varanasi"}),
                "taluka": user.get("taluka", {"name": "Varanasi Sadar"}),
                "region": user.get("region", {"name": "Rampur Gram Panchayat", "id": "rg-ram"}),
                "ward": user.get("ward", {"name": "Ward 1", "wardNumber": 1}),
                "status": "Submitted",
                "assignedOfficer": "",
                "adminRemark": "",
                "createdAt": now,
                "updatedAt": now,
                "statusHistory": [
                    {
                        "status": "Submitted",
                        "changedBy": f"{user['name']} (Citizen)",
                        "remarks": "Grievance ticket created with photographic proof.",
                        "timestamp": now
                    }
                ]
            }

            DATA["complaints"].insert(0, new_complaint)
            return self.send_json(201, {
                "success": True,
                "message": f"Grievance {cid} logged successfully!",
                "complaint": new_complaint
            })

        self.send_json(404, {"success": False, "message": "Not Found"})

    def do_PATCH(self):
        url = urlparse(self.path)
        path = url.path.rstrip("/")
        body = self.parse_body()

        # Admin Update Complaint
        if path.startswith("/api/admin/complaints/"):
            admin = self.get_auth_user()
            if not admin or admin.get("role") != "regional_admin":
                return self.send_json(403, {"success": False, "message": "Forbidden"})

            cid = path.split("/")[-1]
            for c in DATA["complaints"]:
                if c["complaintId"] == cid:
                    # Enforce regional isolation
                    if c["region"]["id"] != admin["region"]["id"]:
                        return self.send_json(403, {
                            "success": False,
                            "message": f"Jurisdiction Violation: You cannot modify complaints outside {admin['region']['name']}."
                        })

                    new_status = body.get("status")
                    admin_remark = body.get("adminRemark", "")
                    assigned_officer = body.get("assignedOfficer", "")

                    if new_status:
                        c["status"] = new_status
                    if admin_remark:
                        c["adminRemark"] = admin_remark
                    if assigned_officer:
                        c["assignedOfficer"] = assigned_officer

                    now = datetime.utcnow().isoformat() + "Z"
                    c["updatedAt"] = now
                    c["statusHistory"].append({
                        "status": c["status"],
                        "changedBy": f"{admin['name']} ({admin.get('designation', 'Regional Officer')})",
                        "remarks": admin_remark or f"Status transitioned to '{c['status']}'.",
                        "timestamp": now
                    })

                    return self.send_json(200, {
                        "success": True,
                        "message": f"Grievance {cid} updated successfully!",
                        "complaint": c
                    })

            return self.send_json(404, {"success": False, "message": "Complaint not found"})

        self.send_json(404, {"success": False, "message": "Not Found"})

def run():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, GramSetuAPIHandler)
    print(f"GramSetu Live REST API running on http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
        httpd.server_close()

if __name__ == "__main__":
    run()
