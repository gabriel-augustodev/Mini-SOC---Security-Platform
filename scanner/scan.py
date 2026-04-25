import nmap
import json
import sys

target = sys.argv[1]

nm = nmap.PortScanner()
nm.scan(target, arguments='-T4 -F')

result = []

for host in nm.all_hosts():
    for proto in nm[host].all_protocols():
        ports = nm[host][proto].keys()
        for port in ports:
            result.append({
                "host": host,
                "port": port,
                "state": nm[host][proto][port]['state'],
                "service": nm[host][proto][port]['name']
            })

print(json.dumps(result))