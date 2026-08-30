import http.server
import socketserver
import socket
import json
import os

PORT = 8000

def get_local_ip():
    """Detects the primary local IP address of the host machine."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Connect to a public DNS (does not actually send data)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

def write_config_json(url):
    """Writes config.json for the frontend app.js to fetch."""
    config = {
        "url": url
    }
    with open('config.json', 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2)

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler to set cache-control headers and prevent caching during dev."""
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    local_ip = get_local_ip()
    local_url = f"http://{local_ip}:{PORT}"
    
    # Save the local network URL configuration
    write_config_json(local_url)
    
    # Print terminal splash screen
    print("=" * 65)
    print("        CardioMatch - Local Server Utility")
    print("=" * 65)
    print(f" [PC Localhost] -> http://localhost:{PORT}")
    print(f" [WiFi Network] -> {local_url}")
    print("=" * 65)
    print("\n >>> วิธีการเล่นบนอุปกรณ์เครื่องอื่น (มือถือ / แท็บเล็ต):")
    print(f" 1. เชื่อมต่ออุปกรณ์ของคุณและคอมพิวเตอร์นี้กับวง Wi-Fi เดียวกัน")
    print(f" 2. เปิดหน้าเว็บเกมนี้บนคอมพิวเตอร์ของคุณที่ลิงก์ด้านบน")
    print(f" 3. คลิกปุ่ม 'เล่นบนมือถือ' ด้านขวาบน เพื่อแสดง QR Code")
    print(f" 4. สแกน QR Code ด้วยมือถือเพื่อเริ่มสนุกได้ทันที!\n")
    print("=" * 65)
    print(f" กำลังเซิร์ฟเวอร์เริ่มทำงานบนพอร์ต {PORT}... กด Ctrl+C เพื่อยกเลิก")
    print("=" * 65)
    
    # Disable cache to ensure client-side changes load instantly
    handler = CustomHandler
    
    # Allow port reuse to avoid Windows 'Address already in use' errors on quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n เซิร์ฟเวอร์ปิดตัวเรียบร้อยแล้ว. ขอบคุณที่เล่น CardioMatch!")

if __name__ == "__main__":
    # Ensure working directory is the folder of this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run_server()
