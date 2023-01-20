import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralWhereUniqueInput } from "../../../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReferralArgs {
  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;
}
