from flask import Flask, send_file, request, render_template
import io
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/download")
def download():
    size_mb = int(request.args.get("size", 20))
    data = os.urandom(size_mb * 1024 * 1024)
    return send_file(io.BytesIO(data), mimetype="application/octet-stream", as_attachment=True, download_name="data.bin")

@app.route("/upload", methods=["POST"])
def upload():
    # We just receive the data and discard it
    _ = request.data
    return '', 204

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
