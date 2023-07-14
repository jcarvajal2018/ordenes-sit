import { IsNotEmpty, IsEmail, MinLength, MaxLength} from 'class-validator';
export class EditUsersDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(4)
  @MaxLength(12)
  password: string;





}



