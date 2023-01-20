import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintWhereUniqueInput } from "../../../inputs/MintWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMintOrThrowArgs {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;
}
