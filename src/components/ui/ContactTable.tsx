const contacts = [
  {
    purpose: "Non-Emergency Questions & Consults (Presbyterian Hospital)",
    contact: "Epic secure chat: PH PHG General Cardiology APC",
  },
  {
    purpose: "Non-Emergency Questions & Consults (Rust Medical Center)",
    contact: "Epic secure chat: RMC PHG General Cardiology APC",
  },
  {
    purpose: "Advanced Imaging Questions",
    contact: "Epic secure chat: PHS Cardiac Imaging Provider",
  },
  {
    purpose: "Patient Education, Discharge/Follow-up Coordination",
    contact: "Epic chat: CDS PHG Heart Failure Transition of Care Managers",
  },
  {
    purpose: "Emergency Contact (Presbyterian Hospital)",
    contact: "Call 505-270-0703",
  },
  {
    purpose: "Emergency Contact (Rust Medical Center)",
    contact: "Call 505-235-0118",
  },
];

const ContactTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="table-clinical">
        <thead>
          <tr>
            <th className="w-1/2">Purpose / Query Type</th>
            <th className="w-1/2">Contact Method & Details</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="font-medium">{contact.purpose}</td>
              <td className="text-muted-foreground">{contact.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;