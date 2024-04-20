import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { ShoppingCart, User, Heart } from 'lucide-react';
import { handleSignOut } from './Navbar';

export function UserDropdown() {
  return (
    <div className="flex justify-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="iconCategory"
            className="top-4 right-4 rounded-full"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem>
            <p>A bunch of items 1</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items 2</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items 3</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="iconCategory"
            className="top-4 right-4 rounded-full"
          >
            <User className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem>
            <button
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="iconCategory"
            className="top-4 right-4 rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 1</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 2</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 3</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
