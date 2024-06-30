async function getMemberDetails(id) {
  const res = await fetch("http://localhost:4000/membersList/" + id, {
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}
export default async function MemberDetails({ params }) {
  const MemberDetails = await getMemberDetails(params.id);
  return (
    <main>
      <h3>MemberDetails</h3>

      <div key={MemberDetails.id} className="card">
        <h4 className="label">
          Name :
          <span>
            {MemberDetails.firstName} {MemberDetails.firstName}
          </span>
        </h4>
        <h4 className="label">
          Club : <span>{MemberDetails.club}</span>
        </h4>
        <h4 className="label">
          ID : <span>{MemberDetails.memberId}</span>
        </h4>
        <h4 className="label">
          Role : <span>{MemberDetails.role}</span>
        </h4>
        <h4 className="label">
          Distrect : <span>{MemberDetails.district}</span>
        </h4>
      </div>
    </main>
  );
}
