import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findById(id: number) {
    return `This action returns a account id #${id}`;
  }

  findAll(id: number) {
    return `This action returns all accounts of user id #${id}`;
  }

  findByInstituition(id: number, ins_id: string) {
    return `This action returns all accounts by user id #${id} has in instituition id iqual #${ins_id}`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
