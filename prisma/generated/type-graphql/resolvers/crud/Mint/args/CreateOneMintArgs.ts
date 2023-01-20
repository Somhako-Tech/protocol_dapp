import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintCreateInput } from "../../../inputs/MintCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMintArgs {
  @TypeGraphQL.Field(_type => MintCreateInput, {
    nullable: false
  })
  data!: MintCreateInput;
}
