import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintAvgOrderByAggregateInput } from "../inputs/MintAvgOrderByAggregateInput";
import { MintCountOrderByAggregateInput } from "../inputs/MintCountOrderByAggregateInput";
import { MintMaxOrderByAggregateInput } from "../inputs/MintMaxOrderByAggregateInput";
import { MintMinOrderByAggregateInput } from "../inputs/MintMinOrderByAggregateInput";
import { MintSumOrderByAggregateInput } from "../inputs/MintSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MintOrderByWithAggregationInput", {
  isAbstract: true
})
export class MintOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  profile_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  approved?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewed_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MintCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MintCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MintAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MintAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MintMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MintMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MintMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MintMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MintSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MintSumOrderByAggregateInput | undefined;
}
