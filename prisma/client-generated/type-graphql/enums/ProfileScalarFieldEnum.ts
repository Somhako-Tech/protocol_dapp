import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  handle = "handle",
  title = "title",
  summary = "summary",
  job_type = "job_type",
  pref_location = "pref_location",
  salary = "salary",
  years_of_exp = "years_of_exp",
  link = "link",
  address = "address",
  skills = "skills",
  education = "education",
  experience = "experience",
  minted = "minted",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
