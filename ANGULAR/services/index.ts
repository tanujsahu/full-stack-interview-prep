@Injectable({ providedIn: 'root' })
export class DataService {
  getData() {
    return this.http.get('api/data');
  }
}
