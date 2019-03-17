import { Movies } from './movies.model';

describe('Movies', () => {
  it('should create an instance', () => {
    expect(new Movies('','','',0,0,0,'','')).toBeTruthy();
  });
});
