import Link from "next/link";

// For data that is not constantly updated
async function getMemberList() {
  const res = await fetch("http://localhost:4000/membersList", {
    next: { revalidate: 0 },
  });
  return res.json();
}
export default async function MembersList() {
  const members = await getMemberList();
  return (
    <>
      {members.map((member) => (
        <Link href={`/home/${member.id}`}>
          <div key={member.id} className="card">
            <h4 className="label">
              Name :{" "}
              <span>
                {member.firstName} {member.firstName}
              </span>{" "}
            </h4>
            <h4 className="label">
              Club : <span>{member.club}</span>
            </h4>
            <h4 className="label">
              ID : <span>{member.memberId}</span>
            </h4>
          </div>
        </Link>
      ))}
      {members.length === 0 && <p>No members found</p>}
    </>
  );
}
