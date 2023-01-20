import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralCreateManyUserInput } from "../inputs/ReferralCreateManyUserInput";

@TypeGraphQL.InputType("ReferralCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ReferralCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReferralCreateManyUserInput], {
    nullable: false
  })
  data!: ReferralCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
