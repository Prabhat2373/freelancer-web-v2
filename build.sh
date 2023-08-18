
install_dependencies() {
  echo "Installing dependencies..."
  npm install
}

build_app() {
  echo "Building the Next.js app..."
  npm run build
}

start_app() {
  echo "Starting the app..."
  npm start
}

echo "App is started Building.."

install_dependencies
build_app
start_app

echo "App is now running. Access it at http://localhost:3000/"
