import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditOrderByWithAggregationInput } from "../../../inputs/CreditOrderByWithAggregationInput";
import { CreditScalarWhereWithAggregatesInput } from "../../../inputs/CreditScalarWhereWithAggregatesInput";
import { CreditWhereInput } from "../../../inputs/CreditWhereInput";
import { CreditScalarFieldEnum } from "../../../../enums/CreditScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCreditArgs {
  @TypeGraphQL.Field(_type => CreditWhereInput, {
    nullable: true
  })
  where?: CreditWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreditOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CreditOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "orefid" | "profile_id">;

  @TypeGraphQL.Field(_type => CreditScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CreditScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
