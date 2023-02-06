import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditAvgOrderByAggregateInput } from "../inputs/CreditAvgOrderByAggregateInput";
import { CreditCountOrderByAggregateInput } from "../inputs/CreditCountOrderByAggregateInput";
import { CreditMaxOrderByAggregateInput } from "../inputs/CreditMaxOrderByAggregateInput";
import { CreditMinOrderByAggregateInput } from "../inputs/CreditMinOrderByAggregateInput";
import { CreditSumOrderByAggregateInput } from "../inputs/CreditSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CreditOrderByWithAggregationInput", {
  isAbstract: true
})
export class CreditOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orefid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  profile_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CreditCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CreditCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CreditAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CreditMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CreditMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CreditSumOrderByAggregateInput | undefined;
}
