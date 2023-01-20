import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralCreateManyInput } from "../../../inputs/ReferralCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReferralArgs {
  @TypeGraphQL.Field(_type => [ReferralCreateManyInput], {
    nullable: false
  })
  data!: ReferralCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
