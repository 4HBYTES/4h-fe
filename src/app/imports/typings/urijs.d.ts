interface URI {
  ():URI;
  (value:string | URIOptions | HTMLElement):URI;

  new ():URI;
  new (value:string | URIOptions | HTMLElement):URI;

  absoluteTo(path:string):URI;
  absoluteTo(path:URI):URI;
  addFragment(fragment:string):URI;
  addQuery(qry:string):URI;
  addQuery(qry:Object):URI;
  addSearch(qry:string):URI;
  addSearch(key:string, value:any):URI;
  addSearch(qry:Object):URI;
  authority():string;
  authority(authority:string):URI;

  clone():URI;

  directory():string;
  directory(dir:boolean):string;
  directory(dir:string):URI;
  domain():string;
  domain(domain:boolean):string;
  domain(domain:string):URI;

  duplicateQueryParameters(val:boolean):URI;

  equals():boolean;
  equals(url:string | URI):boolean;

  filename():string;
  filename(file:boolean):string;
  filename(file:string):URI;
  fragment():string;
  fragment(fragment:string):URI;
  fragmentPrefix(prefix:string):URI;

  hash():string;
  hash(hash:string):URI;
  host():string;
  host(host:string):URI;
  hostname():string;
  hostname(hostname:string):URI;
  href():string;
  href(url:string):void;

  is(qry:string):boolean;
  iso8859():URI;

  joinPaths(...paths:(string | URI)[]):URI;

  normalize():URI;
  normalizeFragment():URI;
  normalizeHash():URI;
  normalizeHostname():URI;
  normalizePath():URI;
  normalizePathname():URI;
  normalizePort():URI;
  normalizeProtocol():URI;
  normalizeQuery():URI;
  normalizeSearch():URI;

  origin():string;
  origin(uri:string | URI):URI;

  password():string;
  password(pw:string):URI;
  path():string;
  path(path:boolean):string;
  path(path:string):URI;
  pathname():string;
  pathname(path:boolean):string;
  pathname(path:string):URI;
  port():string;
  port(port:string):URI;
  protocol():string;
  protocol(protocol:string):URI;

  query():string;
  query(qry:string):URI;
  query(qry:boolean):Object;
  query(qry:Object):URI;

  readable():string;
  relativeTo(path:string):URI;
  removeQuery(qry:string):URI;
  removeQuery(qry:Object):URI;
  removeSearch(qry:string):URI;
  removeSearch(qry:Object):URI;
  resource():string;
  resource(resource:string):URI;

  scheme():string;
  scheme(protocol:string):URI;
  search():string;
  search(qry:string):URI;
  search(qry:boolean):any;
  search(qry:Object):URI;
  segment():string[];
  segment(segments:string[]):URI;
  segment(position:number):string;
  segment(position:number, level:string):URI;
  segment(segment:string):URI;
  setQuery(key:string, value:string):URI;
  setQuery(qry:Object):URI;
  setSearch(key:string, value:string):URI;
  setSearch(qry:Object):URI;
  hasQuery(name:string | any, value?:string | number | boolean | Function | Array<string> | Array<number> | Array<boolean> | RegExp, withinArray?:boolean):boolean;
  hasSearch(name:string | any, value?:string | number | boolean | Function | Array<string> | Array<number> | Array<boolean> | RegExp, withinArray?:boolean):boolean;
  subdomain():string;
  subdomain(subdomain:string):URI;
  suffix():string;
  suffix(suffix:boolean):string;
  suffix(suffix:string):URI;

  tld():string;
  tld(tld:boolean):string;
  tld(tld:string):URI;

  unicode():URI;
  userinfo():string;
  userinfo(userinfo:string):URI;
  username():string;
  username(uname:string):URI;

  valueOf():string;
}

interface URIOptions {
  protocol?:string;
  username?:string;
  password?:string;
  hostname?:string;
  port?:string;
  path?:string;
  query?:string;
  fragment?:string;
}

declare var URI:URI;

declare module 'urijs' {
  export = URI;
}
