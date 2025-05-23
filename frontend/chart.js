fetch('http://172.17.253.10:5000/api/status')
  .then(res => res.json())
  .then(data => {
    document.getElementById('status').innerText = data.status;
    document.getElementById('status').classList.replace('alert-info', 'alert-success');
  })
  .catch(() => {
    document.getElementById('status').innerText = 'Erro ao conectar ao backend';
    document.getElementById('status').classList.replace('alert-info', 'alert-danger');
  });

fetch('http://172.17.253.10:5000/api/data')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('grafico');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Acessos Mensais',
          data: data.values,
          backgroundColor: '#007bff'
        }]
      }
    });
  });

fetch('http://172.17.253.10:5000/api/table')
  .then(res => res.json())
  .then(rows => {
    const tbody = document.getElementById('tabela');
    rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${row.id}</td><td>${row.nome}</td><td>${row.status}</td>`;
      tbody.appendChild(tr);
    });
  });

fetch('http://172.17.253.10:5000/api/ports')
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById('portas');
    if(data.resultado && data.resultado.length > 0) {
      data.resultado.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.porta}</td><td>${item.status}</td>`;
        tbody.appendChild(tr);
      });
    } else {
      tbody.innerHTML = '<tr><td colspan="2">Nenhum dado de portas recebido ainda.</td></tr>';
    }
  })
  .catch(() => {
    document.getElementById('portas').innerHTML = '<tr><td colspan="2">Nenhum dado de portas recebido ainda.</td></tr>';
  });
