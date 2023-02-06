import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CreditScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CreditScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CreditScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CreditScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CreditScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CreditScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  orefid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  profile_id?: StringWithAggregatesFilter | undefined;
}
