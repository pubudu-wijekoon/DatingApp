using System;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace API.DTOs;

public class LoginDto
{
  public required string Username {get; set;}

  public required string Password {get; set;}
}
