$(function(){
  // cursor dom manipulation stuff:
  var promptText = "drew@home:~ $ ",
      $cursor = $("#blinking_cursor"),
      currentCommand = "",

      append = function(html, newlineAfter){
        var before = "<span>", after = "</span>";
        if(newlineAfter){
          after = after + "<br>";
        }
        $(before + html + after).insertBefore($cursor);
      },
      newPrompt = function(html){
        if(html){
          append(html);
        }
        append(promptText);
      },

      // some defaults
      Command = function(options){
        this.name = options.name;
        this.handler = function(input){
          if(this.isUnsupportedArgument(input)){
            this.usage(this.name + ": " + this.unsupportedAgrgumentPrefix + ": " + (input === "" ? "[empty string]" : input));
          }
          else{
            options.handler(input);
          }
        };
        this.name = options.name;
        this.isUnsupportedArgument = function(){ return false; };
        this.unsupportedArgumentPrefix = "unsupported argument";
        this.usageString = (options.usageString ? options.usageString : options.name);
        this.usage = function(html){
          if(html){
            append(html, true);
          }
          append("Usage: " + this.usageString, true);
        };
        return this;
      },

      // commands and cool stuff
      directories = [
        {
          "name" : "resume",
          "url" : "http://drewinglis.com/resume/"
        },
        {
          "name" : "blog",
          "url" : "http://blog.drewinglis.com/"
        }
      ],
      commands = [
        new Command({
          "name" : "cd",
          "handler" : function(input){
            for(var i = 0; i < directories.length; i++){
              console.log(input);
              console.log(directories[i].name);
              if(directories[i].name === input){
                window.location = directories[i].url;
                return;
              }
            }
            this.usage(input);
          },
          "unsupportedArgumentPrefix" : "no such directory",
          "usageString" : "cd [directory]",
          "usage" : function(){
            append("Directory not found.", true);
          }
        }),
        new Command({
          "name" : "finger",
          "handler" : function (input) {
            if (input == "drew") {
              append("Come on, I just printed that.", true);
              return;
            }
            append("finger: " + input + ": no such user.", true);
          }
        }),
        new Command({
          "name" : "help",
          "handler" : function(input){
            append("Currently supported commands: cd ls help", true);
          }
        }),
        new Command({
          "name" : "ls",
          "handler" : function(input){
            var result = "";
            for(var i = 0; i < directories.length; i++){
              result += directories[i].name + " ";
            }
            append(result, true);
          },
          "isUnsupportedArgument" : function(input){
            return input !== "";
          }
        }),
        new Command({
          "name" : "",
          "handler" : function(input){
            append("Unsupported command. Currently supported commands: cd ls help", true);
          }
        })
      ],

      // helper functions for bindings
      handleCommand = function(){
        currentCommand = currentCommand.replace(/&nbsp;/ig, " ");
        var parts = currentCommand.split(" ");
        append("", true);
        for(var i = 0; i < commands.length; i++){
          if(commands[i].name === parts[0] || i === commands.length - 1){
            commands[i].handler(currentCommand.slice(parts[0].length + 1, currentCommand.length));
            break;
          }
        }
        currentCommand = "";
        newPrompt();
      };

  // we want ls and things to behave correctly
  directories.sort(function(a,b){
    return a.name > b.name;
  });

  $("body").keydown(function(e){
    var key = e.keyCode, keyString,
        addKeyString = function(keyString){
          currentCommand += keyString;
          append(keyString);
        };

    if(key === 8){ // backspace
      e.preventDefault();
      e.stopImmediatePropagation();
      if(currentCommand.replace(/[(&nbsp;)\w]/gi).length > 0){
        currentCommand = currentCommand.slice(0, currentCommand.length - 1);
        $cursor.prev().remove();
      }
    }
    else if(key === 13){ // enter
      handleCommand();
    }
    else if(key > 95 && key < 106){
      addKeyString(String.fromCharCode(key - 48));
    }
    else if(key === 106){
      addKeyString("*");
    }
    else if(key === 107){
      addKeyString("+");
    }
    else if(key === 109 || key === 189){
      addKeyString("-");
    }
    else if(key === 110 || key === 190){
      addKeyString(".");
    }
    else if(key === 111 || key === 191){
      addKeyString("/");
    }
    else if(key === 186){
      addKeyString(";");
    }
    else if(key === 187){
      addKeyString("=");
    }
    else if(key === 188){
      addKeyString(",");
    }
    else if(key === 220){
      addKeyString("\\");
    }
    else if(key === 222){
      addKeyString("'");
    }
    else if(key === 32){
      addKeyString("&nbsp;");
    }
    else if((key > 47 && key < 91) || (key > 185 && key < 193) || (key > 218 && key < 223)){
      addKeyString(String.fromCharCode(key).toLowerCase());
    }
  });
});
