import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralOrderByWithAggregationInput } from "../../../inputs/ReferralOrderByWithAggregationInput";
import { ReferralScalarWhereWithAggregatesInput } from "../../../inputs/ReferralScalarWhereWithAggregatesInput";
import { ReferralWhereInput } from "../../../inputs/ReferralWhereInput";
import { ReferralScalarFieldEnum } from "../../../../enums/ReferralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReferralArgs {
  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  where?: ReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReferralOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReferralOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "user_id">;

  @TypeGraphQL.Field(_type => ReferralScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReferralScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
