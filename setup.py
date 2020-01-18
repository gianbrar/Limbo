from os import system

setup = input("Start client or server? (S/C)")
if setup.lower() == "s":
  print("Starting server")
  system("python3 limbo_server.py")
elif setup.lower() == "c":
  print("Starting client")
  system("python3 limbo_client.py")