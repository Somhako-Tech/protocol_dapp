import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintCreateInput } from "../../../inputs/MintCreateInput";
import { MintUpdateInput } from "../../../inputs/MintUpdateInput";
import { MintWhereUniqueInput } from "../../../inputs/MintWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMintArgs {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;

  @TypeGraphQL.Field(_type => MintCreateInput, {
    nullable: false
  })
  create!: MintCreateInput;

  @TypeGraphQL.Field(_type => MintUpdateInput, {
    nullable: false
  })
  update!: MintUpdateInput;
}
