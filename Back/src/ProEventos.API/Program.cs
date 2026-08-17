var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// OpenAPI nativo do .NET 10
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    // Gera o documento OpenAPI em:
    // /openapi/v1.json
    app.MapOpenApi();

    // Interface visual do Swagger
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint(
            "/openapi/v1.json",
            "ProEventos API v1"
        );
    });
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();