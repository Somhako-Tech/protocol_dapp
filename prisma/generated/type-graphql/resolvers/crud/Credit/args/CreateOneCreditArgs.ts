import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditCreateInput } from "../../../inputs/CreditCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCreditArgs {
  @TypeGraphQL.Field(_type => CreditCreateInput, {
    nullable: false
  })
  data!: CreditCreateInput;
}
