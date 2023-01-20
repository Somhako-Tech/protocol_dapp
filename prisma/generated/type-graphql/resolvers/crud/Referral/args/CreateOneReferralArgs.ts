import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralCreateInput } from "../../../inputs/ReferralCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReferralArgs {
  @TypeGraphQL.Field(_type => ReferralCreateInput, {
    nullable: false
  })
  data!: ReferralCreateInput;
}
