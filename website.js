//Nodejs HTTP Module
//require -- we use the require directive to load Node JS modules.

//--Create Server--
//create server -- which allows Node.js to transfer data over the HTTP
//The HTTP module use to createServer() method to create an HTTP server.

//--HTTP Header--
/*
If the response from the HTTP server is supposed to be displayed as HTML,you should include an HTTP header with the correct content type.
The first argument of thr res.writeHead() method is the status code, 200 means that all is OK,the second argument is an object containing the response headers.
*/

//--Port Number --
/*
HTTP server that listens to server ports and gives a response back to the client.
The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.


var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('node.js website');
    res.end('thank u');
}).listen(8080); */


                                             //Nodejs Filesystem Module

/*
1.The node js file system module allows you to read,write,create,update,delete or rename the files on your computer.
2.In fs module,every method has synchronous and asynchronous.
3.Asynchronous is better than synchronous because its never block the program during execution like synchronous.
4.Inside the callback function we pass the first parameter as err for printing the error message when the file have an error.
5.Import file system module using require keyword
 var fs = require('fs');


 //----- Read file -----
 1.fs.readFile() - used to read the files from your computer.
 2.In Node JS,read file have both synchronous and asynchronous methods.
 3. -- Synchronous --
 var data = fs.readFileSync('demo.txt');
 4. -- Asynchronous --
  path - file name including with path
  callback - in this callback function which gets two arguments
  (err,data)
fs.readFile('demo.txt',function(err,data));

//-----Write File -----
fs.writeFile() - if file already exists then its replaces the file content.if the file does not exist,a new file will be created and specified content should be written.
path - file name including with path.
data - string to be written in file.
callabck - in this callback function which gets single arguments (err) which return error in case of any error occur.
fs.writeFile('demo.txt',"Hello world",function(err));

//----- Append File -----
fs.appendFile() - Append the specified content to a file.if file doesnot exists then its create a file and append the content.
path - file name including with path.
data - string to be append in file.
callback - in this callback function which gets single arguments(err) which return error in case of any error occur.
fs.appendFile('demo.txt',"Hello world",function(err))

//----- Rename/Delete file
fs.rename() - this method used to rename the file 
path 1 - existing file name including path
path 2 - new file name including path
callback - in this callback function which gets one argument(err).

fs.rename('demo1.txt','demo2.txt',function(err))

fs.unlink() - this method used to delete a file path - this is string having file name including path.
callback - this is the callback function which gets one argument(err)

fs.unlink('demo.txt',function(err))

//-----Open file -----
1.the fs.open() method takes a "flag" as the second argument.in this method,if the file does not exist,an empty file is created.
2. fs.open(path,flags[,mode],callback)
path - file name including with path.
flags - flag specifies the behavior of the file to be opened like read/write/append.
mode - this sets the file mode (permission and sticky bits),but only if the file was created.it defaults to 0666,readable and writeable.
callback - in this callback function which gets two arguments(err,fd).
err - it returns error in case of any error occur.
fd - this is the file descriptor returned by fs.open().
3. fs.open("demo.txt",w+,function(err,fd))

--lot of flags for handling file system.--

//-- Read File --
1. r - read file,if it doesnot exist its return exception
2. r+ - read and write
3. rs - read in synchronous mode
4. rs+ - read and write in synchronous mode

//-- Write File --
1. w - write(if file not exist then its create a file,if it exists then the file will be truncated)
2. wx - write(if file exist its fail)
3. w+ - write and read(if file not exist then its create a file,if it exists then the file will be truncatd)
4. wx+ - write and read(if file exist its fail)

//-- Append File --
1. a - appending,if file not exist then its create a file
2. ax - appending,if file exist its fail
3. a+ - read and append,if file not exist then its create a file
4. ax+ - read and append,if file exist its fail

//-- Methods for getting file information
1. stats.isFile() - returns true if file type is simple file.
2. stats.isDirectory() - returns true if file type is directory.
Path : this is string having file name including path.
callback : this is the callback function which gets two arguments(err,stats)
err - its return errors in case of any error occurs
stats - its an object of fs.Stats type.

fs.stat('demo.txt',function(err,stats))


//-- Asynchronous Method

var fs = require("fs");
fs.readFile('demo.txt',function(err,data){

    if(err){
        return console.log.error(err);
    }
    console.log("Async data :"+ data.toString());
});

//-- Synchronous Method

var data = fs.readFileSync('demo.txt');
console.log("sync data :"+data.toString());
console.log("program end");

//-- Web Browser --> Asynchronous Method & Synchronous Method --
//-- Read --
var http = require("http");
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('demo.txt',function(err,data){
        if(err){
            return console.log.error(err);
        }
        console.log("Async data :"+data.toString());
        res.write(data);
        res.end();
    });
}).listen(8080); 

//-- Write --
var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.writeFile('demo.txt',"Name : Ranjithkumar From : Karaikudi",function(err)
    {
        if(err)
        {
            return console.log.error(err);
        }
        res.write("success");
        res.end();
    });
}).listen(8080); 

//-- Append --

var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.appendFile('demo.txt'," Name : Ranjithkumar From : Karaikudi Job : Developer ",function(err)
    {
        if(err)
        {
            return console.log.error(err);
        }
        res.write("Append successfully");
        res.end();
    });
}).listen(8080); 

//-- Rename --

var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.rename('demo.txt',"Demo.txt",function(err)
    {
        if(err)
        {
            return console.log.error(err);
        }
        res.write("Filename Changed successfully");
        res.end();
    });
}).listen(8080); 

//-- Delete --

var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.unlink('demo1.txt',function(err)
    {
        if(err)
        {
            return console.log.error(err);
        }
        res.write("File Deleted successfully");
        res.end();
    });
}).listen(8080); 

//-- File open --
var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.open('newdemo.txt','w+',function(err,fd)
    {
        if(err)
        {
            return console.log(err);
        }
        res.write("File opened successfully");
        res.end();
    });
}).listen(8080); 

//-- File Status --
var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.stat('newdemo.txt',function(err,stats)
    {
        if(err)
        {
            return console.log(err);
        }
        console.log(stats)
        res.write("Is it file :"+stats.isFile());
        res.write("Is it Directory :"+stats.isDirectory());
        res.end();
    });
}).listen(8092); 

//NodeJS URL Module 
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res)
{
    var weblink = url.parse(req.url,true)
    var filepath = "."+weblink.pathname;
    fs.readFile(filepath,function(err,data)
    {
        if(err)
        {
            res.writeHead(202,{'content-type':'text/html'});
            return res.end("404 file not found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8095); */