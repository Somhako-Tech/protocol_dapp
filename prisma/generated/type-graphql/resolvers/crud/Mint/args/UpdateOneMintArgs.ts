import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintUpdateInput } from "../../../inputs/MintUpdateInput";
import { MintWhereUniqueInput } from "../../../inputs/MintWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMintArgs {
  @TypeGraphQL.Field(_type => MintUpdateInput, {
    nullable: false
  })
  data!: MintUpdateInput;

  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;
}
