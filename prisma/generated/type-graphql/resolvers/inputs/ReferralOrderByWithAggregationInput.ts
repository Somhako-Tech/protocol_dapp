import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralAvgOrderByAggregateInput } from "../inputs/ReferralAvgOrderByAggregateInput";
import { ReferralCountOrderByAggregateInput } from "../inputs/ReferralCountOrderByAggregateInput";
import { ReferralMaxOrderByAggregateInput } from "../inputs/ReferralMaxOrderByAggregateInput";
import { ReferralMinOrderByAggregateInput } from "../inputs/ReferralMinOrderByAggregateInput";
import { ReferralSumOrderByAggregateInput } from "../inputs/ReferralSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReferralOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReferralOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReferralCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReferralCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferralAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReferralAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferralMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReferralMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferralMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReferralMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReferralSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReferralSumOrderByAggregateInput | undefined;
}
