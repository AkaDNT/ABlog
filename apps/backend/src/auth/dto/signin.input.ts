import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SigninInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
