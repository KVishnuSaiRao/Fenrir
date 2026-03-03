export const MOCK_SCANS = [
  { id: '101', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], last: '4d ago' },
  { id: '102', name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], last: '3d ago' },
  { id: '103', name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], last: '3d ago' },
];

export const LOG_ENTRIES = [
  { time: '09:00:00', text: "I'll begin a systematic penetration test on helpdesk.democorp.com.", highlight: "helpdesk.democorp.com" },
  { time: '09:02:00', text: "Excellent reconnaissance results: Apache httpd 2.4.65 on port 80", highlight: "Apache httpd 2.4.65" },
  { time: '09:05:00', text: "Potential IDOR vulnerability detected in X-UserId header", highlight: "IDOR vulnerability" },
];