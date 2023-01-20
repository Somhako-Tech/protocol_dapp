import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralCreateInput } from "../../../inputs/ReferralCreateInput";
import { ReferralUpdateInput } from "../../../inputs/ReferralUpdateInput";
import { ReferralWhereUniqueInput } from "../../../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneReferralArgs {
  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferralCreateInput, {
    nullable: false
  })
  create!: ReferralCreateInput;

  @TypeGraphQL.Field(_type => ReferralUpdateInput, {
    nullable: false
  })
  update!: ReferralUpdateInput;
}
