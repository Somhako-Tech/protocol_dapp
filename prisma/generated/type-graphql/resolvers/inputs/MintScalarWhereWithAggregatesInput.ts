import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MintScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MintScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MintScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MintScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MintScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MintScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  profile_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  approved?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reviewed_by?: StringWithAggregatesFilter | undefined;
}
