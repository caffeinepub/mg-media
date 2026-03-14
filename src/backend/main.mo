import List "mo:core/List";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Submission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submit(name : Text, phone : Text, email : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      phone;
      email;
      message;
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};

