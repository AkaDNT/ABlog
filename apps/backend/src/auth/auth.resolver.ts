import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninInput } from './dto/signin.input';
import { AuthPayload } from './entities/auth-payload.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => AuthPayload)
  async signin(@Args('signinInput') signinInput: SigninInput) {
    const user = await this.authService.validateLocalUser(signinInput);
    return this.authService.login(user);
  }
}
