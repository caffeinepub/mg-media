import List "mo:core/List";

module {
  type Submission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  // The type from the previous (unchanged) version.
  type Actor = {
    submissions : List.List<Submission>;
  };

  public func run(old : Actor) : Actor {
    old;
  };
};
