import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MintScalarWhereInput", {
  isAbstract: true
})
export class MintScalarWhereInput {
  @TypeGraphQL.Field(_type => [MintScalarWhereInput], {
    nullable: true
  })
  AND?: MintScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarWhereInput], {
    nullable: true
  })
  OR?: MintScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarWhereInput], {
    nullable: true
  })
  NOT?: MintScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  profile_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  approved?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reviewed_by?: StringFilter | undefined;
}
