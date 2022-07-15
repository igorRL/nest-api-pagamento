import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('conta')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get('/id/:id')
  findById(@Param('id') id: string) {
    return this.accountsService.findById(+id);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.accountsService.findAll(+id);
  }

  @Get(':id/:ins_id')
  findByInstituition(@Param('id') id: string, @Param('ins_id') ins_id: string) {
    return this.accountsService.findByInstituition(+id, ins_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
