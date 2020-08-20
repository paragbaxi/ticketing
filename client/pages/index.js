import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
  // console.log(tickets);
  // return currentUser ? (
  //   <h1>You are signed in</h1>
  // ) : (
  //   <h1>You are NOT signed in</h1>
  // );

  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

// export async function getStaticProps(req) {
//   const { data } = await axios.get(
//     'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
//     {
//       headers: req.headers,
//     }
//   );
//   console.log(data);
//   return { props: { data } };
// }

// export async function getServerSideProps() {
//   const { data } = await axios.get('/api/users/currentuser');
//   console.log(data);
//   return { props: { data } };
// }

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');
  return { tickets: data };
};

export default LandingPage;
