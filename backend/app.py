from flask import Flask, jsonify, send_from_directory, request

app = Flask(__name__, static_folder="../frontend")

@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/status")
def status():
    return jsonify({"status": "Rabbit online"})

@app.route("/api/data")
def data():
    return jsonify({
        "labels": ["Jan", "Feb", "Mar", "Apr", "May"],
        "values": [12, 19, 3, 5, 2]
    })

@app.route("/api/table")
def table():
    return jsonify([
        {"id": 1, "nome": "Servidor A", "status": "Ativo"},
        {"id": 2, "nome": "Servidor B", "status": "Inativo"},
        {"id": 3, "nome": "Servidor C", "status": "Manutenção"}
    ])

@app.route("/api/ports", methods=["POST"])
def receive_ports():
    data = request.json
    print("Dados de portas recebidos:", data)
    return jsonify({"status": "Recebido com sucesso"})

if __name__ == "__main__":
    app.run(host="172.17.253.10", port=5000)
