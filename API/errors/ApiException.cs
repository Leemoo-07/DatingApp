using System;

namespace API.errors
{
    public class ApiException : Exception
    {


        public int StatusCode { get; set; }
        public string ErrorMessage { get; set; }
        public string Details { get; set; }
        public ApiException(int statusCode, string message = null, string details = null)
        {
            StatusCode = statusCode;
            ErrorMessage = message;
            Details = details;
        }
    }
}