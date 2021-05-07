import Link from 'next/link'
function ClientsPage() {
  const clients = [
    {
      id: 'summer',
      name: 'Summer',
    },
    {
      id: 'lucy',
      name: 'Lucy',
    },
  ]
  return (
    <div>
      <h1>这是所有客户页面</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
