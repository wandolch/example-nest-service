import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto, EditPageDto, PageIdDto } from '../../dto/page.dto';
import { AssignmentDto } from '../../dto/assignment.dto';
import { PageModel } from '../../models/page.model';

@Controller('page')
export class PageController {

  constructor(private pageService: PageService) {
  }

  @Post('/')
  createPage(@Body() createPageDto: CreatePageDto): Promise<string> {
    return this.pageService.savePage(createPageDto);
  }

  @Patch(':pageId')
  editPage(@Body() editPageDto: EditPageDto,
           @Param() { pageId }: PageIdDto): Promise<PageModel> {
    return this.pageService.editPageById(pageId, editPageDto);
  }

  @Get(':pageId')
  getPage(@Param() { pageId }: PageIdDto): Promise<PageModel> {
    return this.pageService.getPageById(pageId);
  }

  @Get('')
  getPages(@Query() assignment: AssignmentDto): Promise<PageModel[]> {
    return this.pageService.getPagesByAssignment(assignment);
  }

  @Delete(':pageId')
  removeImage(@Param() { pageId }: PageIdDto): Promise<string> {
    return this.pageService.removePageById(pageId);
  }
}
