import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralUpdateInput } from "../../../inputs/ReferralUpdateInput";
import { ReferralWhereUniqueInput } from "../../../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReferralArgs {
  @TypeGraphQL.Field(_type => ReferralUpdateInput, {
    nullable: false
  })
  data!: ReferralUpdateInput;

  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;
}
