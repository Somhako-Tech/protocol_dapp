import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ProfileUpdateOneRequiredWithoutMintNestedInput } from "../inputs/ProfileUpdateOneRequiredWithoutMintNestedInput";

@TypeGraphQL.InputType("MintUpdateWithoutUserInput", {
  isAbstract: true
})
export class MintUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  approved?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateOneRequiredWithoutMintNestedInput, {
    nullable: true
  })
  profile?: ProfileUpdateOneRequiredWithoutMintNestedInput | undefined;
}
